from algopy import ARC4Contract, String
from algopy.arc4 import abimethod
from algopy.types import Address, Asset, PaymentTxn, ApplicationCallTxn
from typing import List, Optional
from datetime import datetime

class AlgoTrack(ARC4Contract):
    """
    ARC4 Contract for tracking Algorand wallets and their activities
    """
    # Contract state variables
    class State:
        tracked_wallets: dict[Address, dict] = {}
        total_wallets: int = 0
        last_update: int = 0
        admin: Address = None

    def __init__(self):
        super().__init__()
        self.state = self.State()

    @abimethod
    def initialize(self, admin_address: Address) -> bool:
        """
        Initialize the contract with admin address
        """
        if self.state.admin is not None:
            return False
        
        self.state.admin = admin_address
        self.state.last_update = int(datetime.now().timestamp())
        return True

    @abimethod
    def add_wallet(self, wallet_address: Address, metadata: String = None) -> bool:
        """
        Add a wallet to track with optional metadata
        
        Args:
            wallet_address: Address of the wallet to track
            metadata: Optional metadata about the wallet
        """
        # Verify sender is admin
        if not self._verify_admin():
            return False

        # Check if wallet already exists
        if wallet_address in self.state.tracked_wallets:
            return False

        # Add wallet with metadata
        wallet_data = {
            "address": wallet_address,
            "added_at": int(datetime.now().timestamp()),
            "metadata": metadata or "",
            "balance": 0,
            "assets": [],
            "last_activity": int(datetime.now().timestamp())
        }
        
        self.state.tracked_wallets[wallet_address] = wallet_data
        self.state.total_wallets += 1
        return True

    @abimethod
    def remove_wallet(self, wallet_address: Address) -> bool:
        """
        Remove a wallet from tracking
        """
        if not self._verify_admin():
            return False

        if wallet_address not in self.state.tracked_wallets:
            return False

        del self.state.tracked_wallets[wallet_address]
        self.state.total_wallets -= 1
        return True

    @abimethod
    def update_wallet_data(self, 
                          wallet_address: Address, 
                          balance: int, 
                          assets: List[Asset]) -> bool:
        """
        Update wallet data including balance and assets
        """
        if not self._verify_admin():
            return False

        if wallet_address not in self.state.tracked_wallets:
            return False

        wallet_data = self.state.tracked_wallets[wallet_address]
        wallet_data["balance"] = balance
        wallet_data["assets"] = assets
        wallet_data["last_activity"] = int(datetime.now().timestamp())
        
        self.state.tracked_wallets[wallet_address] = wallet_data
        self.state.last_update = int(datetime.now().timestamp())
        return True

    @abimethod
    def get_wallet_info(self, wallet_address: Address) -> dict:
        """
        Get information about a tracked wallet
        """
        if wallet_address not in self.state.tracked_wallets:
            return None
        return self.state.tracked_wallets[wallet_address]

    @abimethod
    def get_total_tracked(self) -> int:
        """
        Get total number of tracked wallets
        """
        return self.state.total_wallets

    @abimethod
    def process_transaction(self, 
                          txn: PaymentTxn, 
                          wallet_address: Address) -> bool:
        """
        Process and record a transaction for a tracked wallet
        """
        if not self._verify_admin():
            return False

        if wallet_address not in self.state.tracked_wallets:
            return False

        wallet_data = self.state.tracked_wallets[wallet_address]
        
        # Update wallet balance based on transaction
        if txn.sender == wallet_address:
            wallet_data["balance"] -= txn.amount
        elif txn.receiver == wallet_address:
            wallet_data["balance"] += txn.amount

        wallet_data["last_activity"] = int(datetime.now().timestamp())
        self.state.tracked_wallets[wallet_address] = wallet_data
        return True

    @abimethod
    def process_asset_transaction(self, 
                                txn: ApplicationCallTxn, 
                                wallet_address: Address,
                                asset: Asset) -> bool:
        """
        Process and record an asset transaction for a tracked wallet
        """
        if not self._verify_admin():
            return False

        if wallet_address not in self.state.tracked_wallets:
            return False

        wallet_data = self.state.tracked_wallets[wallet_address]
        
        # Update asset holdings
        current_assets = wallet_data["assets"]
        if asset not in current_assets:
            current_assets.append(asset)
        
        wallet_data["assets"] = current_assets
        wallet_data["last_activity"] = int(datetime.now().timestamp())
        self.state.tracked_wallets[wallet_address] = wallet_data
        return True

    def _verify_admin(self) -> bool:
        """
        Internal method to verify if sender is admin
        """
        return self.ctx.sender == self.state.admin

# Compilation and deployment helper methods
def compile_contract():
    """
    Compile the contract
    """
    contract = WalletTrackerContract()
    return contract.compile()

def deploy_contract(client, admin_address: Address):
    """
    Deploy the contract
    """
    contract = WalletTrackerContract()
    app_id = contract.deploy(
        client,
        initialize_args=[admin_address]
    )
    return app_id

if __name__ == "__main__":
    # Example compilation
    compiled = compile_contract()
    print(f"Contract compiled successfully: {compiled}")