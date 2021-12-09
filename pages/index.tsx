import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Container from 'react-bootstrap/Container';
import config from '../config/config';

function Index() {
    return (
        <Layout title="Homepage" description="Ether is a 64-bit operating system for x86-based processors written entirely in assembly language." url={ config.base + "/" } image={ config.base + "/og.png" } type="website">
            <Hero />
            <Container className="text-center">
                <hr />
                <img src={ config.base + "/screenshot1.png" } alt="Screenshot 1" />
            </Container>
            <Container className="text-center">
                <hr />
                <p>
                    The Ether Operating System is an operating system for x86-based PCs written entirely in assembly
                    language. Due to the fact that it is written in assembly, it can be heavily optimized using hardware
                    instructions and SSE technology. It is written using the NASM assembler. It is designed to be
                    mostly POSIX-compliant, and uses a custom file system called EtherFS.
                </p>
            </Container>
        </Layout>
    );
}

export default Index;