import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-4">
          <h1 className="text-3xl my-3">Hey, it time to sign in</h1>
          <LoginForm/>
    </div>
  );
}
