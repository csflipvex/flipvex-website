import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';

export const NotFound = () => {
  return (
    <div className="w-full py-32 bg-zinc-50 text-center">
      <Container>
        <span className="font-mono text-xs uppercase tracking-widest text-brand-accent font-bold">
          Error 404
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-brand-dark tracking-tight mt-2 mb-4">
          Page Not Found
        </h1>
        <p className="text-base text-zinc-600 max-w-md mx-auto mb-8">
          The requested system endpoint does not exist or has been relocated.
        </p>
        <Button to="/" variant="dark">
          Return To Home
        </Button>
      </Container>
    </div>
  );
};