"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover"
import { Check, Copy, Link } from "lucide-react"

const Popup = ({ url = "https://example.com" }: { url?: string }) => {
    const [isCopied, setIsCopied] = useState(false)

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url)
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000) // Reset copied state after 2 seconds
        } catch (err) {
            console.error('Failed to copy: ', err)
        }
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="secondary">
                    <Link className="mr-2 h-4 w-4" />
                    Show URL
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="flex flex-col space-y-2">
                    <h4 className="font-medium leading-none">URL</h4>
                    <p className="text-sm text-muted-foreground">Copy the URL to share</p>
                    <div className="flex space-x-2">
                        <Input
                            id="url"
                            value={url}
                            readOnly
                            className="w-[300px]"
                        />
                        <Button size="icon" onClick={copyToClipboard}>
                            {isCopied ? (
                                <Check className="h-4 w-4" />
                            ) : (
                                <Copy className="h-4 w-4" />
                            )}
                            <span className="sr-only">Copy</span>
                        </Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default Popup;