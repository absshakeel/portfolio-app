import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import React from 'react';

const WebsiteFooter = () => {

    return (
        <>
            <div>
                <div>
                    Get connected with me on.
                </div>

                <div>
                    "TODO: Add links to the following social medias: Github, Instagram, LinkedIn"
                </div>
            </div>

            {/**/} <Table>
                <TableBody>
                <TableRow>
                    <TableCell>
                        Technologies Used
                    </TableCell>

                    <TableCell>
                        Inspired By
                    </TableCell>

                    <TableCell>
                        Connect
                    </TableCell>

                    <TableCell>
                        View Resume
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <ul>
                            <li> React </li>
                            <li> HTML </li>
                            <li> CSS </li>
                            <li> Javascript </li>
                        </ul>
                    </TableCell>
                    
                    <TableCell>
                        <ul>
                            <li><a href="https://getmdl.io/templates/android-dot-com/index.html">Android.com Google MDL</a></li>
                        </ul>
                    </TableCell>
                    
                    <TableCell>
                        <ul>
                            <li>TODO: Specify email such that when you click on it, it should open up in outlook or other email clients. </li>
                            <li>Send message to me using the form/field.</li> 
                        </ul>
                    </TableCell>
                    
                    <TableCell>
                        <ul>
                            <li>TODO: Mention icon of resume for displaying resume.</li> 
                        </ul>
                    </TableCell>
                </TableRow>
                </TableBody>
            </Table> 
            
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                 Copyright © 2024 Abhishek Madhusudhan. All Rights Reserved.
      </div>
        </>
    )
}

export default WebsiteFooter; 