import React from 'react';
import { Sidebar } from './Sidebar';

export const Layout = ({ children, header }) => {
    return (
        <div className="flex h-screen w-full bg-background overflow-hidden relative">
            <Sidebar />
            <div className="flex-1 flex flex-col h-full w-full relative">
                {header}
                <main className="flex-1 overflow-hidden relative">
                    {children}
                </main>
            </div>
        </div>
    );
};
