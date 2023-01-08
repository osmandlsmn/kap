import { useRouter } from 'next/router';

const Room = () => {
  const { roomId } = useRouter().query;

  return (
    <div>
      <h1>Room: {roomId}</h1>
    </div>
  );
};

export default Room;
