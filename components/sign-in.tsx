// Alex Olson | alexko@bu.edu
// sign-in.tsx | React component for my OAuth process
// heavily adapted from the Auth.js setup documentation

// import relevant auth packages
import {signIn, auth, signOut,} from "@/auth"

// main sign in component
// this function is closely adapted from the SignIn function in the Auth.js documentation
export default async function SignIn() {
    // wait for the user to be verified and save their information
    const user = await auth();

    // if the user/user info was verified we give display their information
    // also added a signOut button using the same style as the signIn button
    if (user?.user) {
        return (
            <div className="flex w-3/4 m-auto flex-col items-center p-5">
                <h1 className="text-4xl text-white p-5 text-center"> You are now signed in as {user?.user.name} </h1>
                <p className="text-2xl text-white p-5 text-center"> Email: {user?.user.email} </p>
                <form
                    action={async () => {
                        "use server"
                        await signOut();
                    }}
                >
                    <button className="text-white align-middle text-center bg-purple-700 p-5" type="submit">Sign Out of Google</button>
                </form>
                <p className="text-2xl text-white p-5 text-center"> You should currently see your Google Account Information! </p>
            </div>
        )
    } else {
        // otherwise no user is successfully logged in currently so we show the sign in operation
        // the sign in operations were provided in the Auth.js documentation
        return (
            <div className="flex w-3/4 m-auto flex-col items-center p-5">
                <h1 className="text-4xl text-white p-5 text-center"> To get started sign in below: </h1>
                <form
                    action={async () => {
                        "use server"
                        await signIn("google")
                    }}
                >
                    <button className="text-white align-middle text-center bg-purple-700 p-5" type="submit"> Sign in with Google</button>
                </form>
                <p className="text-2xl text-white p-5 text-center"> You should be able to see your information once logged in! </p>
            </div>
        )
    }
}