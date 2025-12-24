import { PipelineUI } from './components/PipelineUI';
import { Layout } from './components/Layout';
import { ThemeToggle } from './components/ThemeToggle';
import { SubmitButton } from './components/SubmitButton';

import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <>
            <Layout
                header={
                    <div className="h-16 border-b border-border bg-background/50 backdrop-blur-sm flex items-center justify-between px-6">
                        <div className="flex items-center gap-4">
                            <h1 className="font-semibold text-lg">firstAutomation.io</h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <SubmitButton />
                        </div>
                    </div>
                }
            >
                <PipelineUI />
            </Layout>
            <Toaster position="top-center" />
        </>
    );
}

export default App;
