import { PipelineToolbar } from './components/PipelineToolbar';
import { PipelineUI } from './components/PipelineUI';
import { SubmitButton } from './components/SubmitButton';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen">
      {/* Top transparent toolbar */}
      <div className="w-screen ml-[calc(50%-50vw)]">
        <PipelineToolbar />
      </div>

      {/* Main centered container with margins and rounded corners */}
      <main className="mx-5 my-4 rounded-2xl glass shadow-[0_20px_60px_rgba(0,0,0,0.35)] bg-black/15 overflow-hidden">
        <div className="w-full h-full">
          <PipelineUI />
        </div>
      </main>

      {/* Bottom actions container for submit/panel (no border emphasis) */}
      <div className="mx-5 mb-6 rounded-2xl backdrop-blur-md">
        <SubmitButton />
      </div>

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: 'rgba(255,255,255,0.08)',
            color: '#efe9ff',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '12px',
            backdropFilter: 'blur(14px)'
          },
          success: {
            iconTheme: {
              primary: '#8b5cf6',
              secondary: '#190a3b',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#190a3b',
            },
          },
        }}
      />
    </div>
  );
}

export default App;
