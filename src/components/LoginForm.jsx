import { doSocialLogin } from "@/app/actions";

const LoginForm = () => {
    return (
        <form action={doSocialLogin}>
                <button type="submit" name="action" value="google" className="bg-red-500 px-4 py-2 rounded-full text-white">Sign In With Google</button>
                <button type="submit" name="action" value="github" className="bg-black px-4 py-2 rounded-full text-white">Sign In With Google</button>
        </form>
    );
};

export default LoginForm;