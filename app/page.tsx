import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl text-primary font-bold">
              Hello there! I'm bored
            </h1>
            <p className="py-6 text-white">
              So making this mini chat room, ik its not new but I'm bored so.
              Chat anonymously in any of these rooms or create one.
            </p>
            <div>
              <button className="btn btn-primary" onClick={}>
                Sign in{" "}
              </button>
              <button className="btn btn-primary"> Create a new Room</button>
            </div>
            <div className="flex">
              <div style={{flex: 1}}>
                <p>hi</p>
                <p>hi</p>
                <p>hi</p>
                <p>hi</p>
                <p>hi</p>
              </div>
              <div style={{flex: 1}}>
                <p>hi</p>
                <p>hi</p>
                <p>hi</p>
                <p>hi</p>
                <p>hi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
