import Layout from '../components/Layout';
import config from '../config/config';

function Features() {
    return (
        <Layout title="Features" description="Here you can find a list of features offered by the Ether Operating System." url={ config.base + "/features" } image={ config.base + "/og.png" } type="website">
            <div className="mt-5 mb-5 container-sm ml-auto mr-auto">
                <div className="row">
                    <div className="col-sm-8 m-auto">
                        <h1>Features</h1>
                        <p>
                            Ether mostly follows the POSIX standard.
                        </p>
                        <h2>OS Loader</h2>
                        <p>
                            The operating system boots using one of two mechanism, legacy boot using the OS Loader or
                            UEFI using the EFI System Loader. The job of the OS Loader and EFI System Loader is to mount
                            the boot file system, read the configuration, load kernel modules and load the kernel ELF, then
                            execute the kernel. The legacy OS Loader executes the kernel in 32-bit mode, and the EFI System
                            Loader executes the kernel in 64-bit mode. The system follows the Multiboot 2 standard.
                        </p>
                        <h2>Kernel</h2>
                        <p>
                            The kernel is basically a microkernel, and the system follows a hybrid kernel design. The kernel
                            has the following features:
                        </p>
                        <ul>
                            <li>Module support</li>
                            <li>Debug terminal output</li>
                            <li>Memory management and paging</li>
                            <li>Scheduling and processes</li>
                            <li>Multiprocessing</li>
                        </ul>
                        <p>
                            Other low-level features are provided through drivers, which are loaded by the bootloader as
                            kernel modules.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Features;