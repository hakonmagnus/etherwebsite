import Layout from '../components/Layout';
import config from '../config/config';

function Downloads() {
    return (
        <Layout title="Downloads" description="Download Ether builds from our website." url={ config.base + "/downloads" } image={ config.base + "/og.png" } type="website">
            <div className="mt-5 mb-5 container-sm ml-auto mr-auto">
                <div className="row">
                    <div className="col-sm-8 m-auto">
                        <h1>Downloads</h1>
                        <p>
                            Here you can download builds for the Ether Operating System.
                        </p>
                        <h2>Disk Images</h2>
                        <a href={ config.base + "/ether-1.0-celeritas.img" }>Ether 1.0 Celeritas Hard Drive Image (256MB)</a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Downloads;