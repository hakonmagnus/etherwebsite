import Layout from '../components/Layout';
import config from '../config/config';
import Table from 'react-bootstrap/Table';

function Versions() {
    return (
        <Layout title="Version History" description="Here you will find a list of versions and releases of the Ether Operating System." url={ config.base + "/versions" } image={ config.base + "/og.png" } type="website">
            <div className="mt-5 mb-5 container-sm ml-auto mr-auto">
                <div className="row">
                    <div className="col-sm-8 m-auto">
                        <h1>Version History</h1>
                        <p>
                            Here is a table of versions and their description.
                        </p>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>SemVer</th>
                                    <th>Codename</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1.0.0</td>
                                    <td>1.0 Celeritas</td>
                                    <td>Version 1.0.0 is the initial version of the Ether Operating System.</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Versions;