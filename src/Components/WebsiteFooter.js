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
                        Technologies Used.
                    </TableCell>

                    <TableCell>
                        Inspired By.
                    </TableCell>

                    <TableCell>
                        Contact Me.
                    </TableCell>

                    <TableCell>
                        View Resume.
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