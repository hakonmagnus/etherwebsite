import React from 'react';

export default function Footer() {
    return (
        <>
            <footer className="page-footer font-small pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div>
                        <a href="https://www.facebook.com/etherosys" className="fab fa-facebook-f"></a>
                        <a href="https://twitter.com/etherosys" className="fab fa-twitter"></a>
                    </div>
                    <div>
                        Copyright &copy; 2021 Hákon Hjaltalín. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
}