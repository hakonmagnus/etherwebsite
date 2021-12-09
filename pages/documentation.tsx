import Layout from '../components/Layout';
import config from '../config/config';

function Documentation() {
    return (
        <Layout title="Documentation" description="Here you can find the Ether Operating System documentation and specifications." url={ config.base + "/features" } image={ config.base + "/og.png" } type="website">
            <div className="mt-5 mb-5 container-sm ml-auto mr-auto">
                <div className="row">
                    <div className="col-sm-8 m-auto">
                        <h1>Documentation</h1>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Documentation;