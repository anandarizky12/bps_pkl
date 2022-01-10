import React from 'react'
import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    LineShareButton,
    LineIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
  } from "react-share";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

function Share({open, setOpen, url}) {
    const [state, setState] = React.useState({
        copied: false,
        value : ''
    });
    return (
        <>
          {open && 
            <div className="fixed z-50 w-screen h-screen top-0 bg-black bg-opacity-75 
                            flex justify-center items-center transition-opacity duration-300">
                <ClickAwayListener onClickAway={() => {setOpen(false)}}>
                    <div className="w-9/12 h-52 md:w-4/12 md:h-2/6 rounded-sm bg-gray-200 opacity-100 text-gray-600 p-4 flex justify-around flex flex-col">
                        <div className="flex justify-between items-center">
                                <p className="text-md">Share</p>
                                <IconButton onClick={() => {setOpen(false)}}>
                                    <CloseIcon />
                                </IconButton>
                        </div>
                    
                        <div className="flex overflow-scroll md:overflow-hidden h-20 md:h-24 md:justify-around">
                                <FacebookShareButton
                                        url={url}
                                        quote={`title`}
                                        title={`facebook`}
                                        className="Demo__some-network__share-button"
                                    >
                                        <FacebookIcon className="h-7 md:h-16 w-16" round />
                                        <p className="text-xs md:text-sm">Facebook</p>
                                </FacebookShareButton>
                                <EmailShareButton
                                        url={url}
                                        quote={`title`}
                                        title={`Email`}
                                        className="Demo__some-network__share-button"
                                    >
                                        <EmailIcon className="h-7 md:h-16 w-16" round />
                                        <p className="text-xs md:text-sm">Email</p>
                                </EmailShareButton>
                                <LineShareButton
                                        url={url}
                                        quote={`title`}
                                        title={`Line`}
                                        className="Demo__some-network__share-button"
                                    >
                                        <LineIcon className="h-7 md:h-16 w-16" round />
                                        <p className="text-xs md:text-sm">Line</p>
                                </LineShareButton>
                                <TelegramShareButton
                                        url={url}
                                        quote={`title`}
                                        title={`Telegram`}
                                        className="Demo__some-network__share-button"
                                    >
                                        <TelegramIcon className="h-7 md:h-16 w-16" round />
                                        <p className="text-xs md:text-sm">Telegram</p>
                                </TelegramShareButton>
                                <WhatsappShareButton
                                        url={url}
                                        quote={`title`}
                                        title={`Whatsapp`}
                                        className="Demo__some-network__share-button"
                                    >
                                        <WhatsappIcon className="h-7 md:h-16 w-16" round />
                                        <p className="text-xs md:text-sm">Whatsapp</p>
                                </WhatsappShareButton>
                                <TwitterShareButton
                                        url={url}
                                        quote={`title`}
                                        title={`Twitter`}
                                        className="Demo__some-network__share-button"
                                    >
                                        <TwitterIcon className="h-7 md:h-16 w-16" round />
                                        <p className="text-xs md:text-sm">Twitter</p>
                                </TwitterShareButton>
                        </div> 
                        <div className="bg-gray-300 border p-2 border-gray-100 flex items-center justify-around rounded-sm p-1">
                            <input value={url} className="w-4/6 bg-transparent text-xs md:text-sm"/>
                            <CopyToClipboard text={url}
                                onCopy={() => setState({copied: true})}>
                               <button className="text-xs md:text-sm font-semibold text-blue-600" >Copy Link</button>
                            </CopyToClipboard>
        
                        </div>
                    </div>   
                </ClickAwayListener>
                </div>
            }
        </>
    )
}

export default Share
