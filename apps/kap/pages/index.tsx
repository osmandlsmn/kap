import Button from '../components/Button';
import Input from '../components/Input';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Home = () => {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('username', username);
    // router.push('/room/123');
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Welcome to kap!</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-y-4"
      >
        <Input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter username"
        />
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default Home;
