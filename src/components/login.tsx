import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";

export const LoginButton = () => {
  const { isSignedIn } = useAuth();

  return (
    <>
      {!isSignedIn && (
        <div className="bg-red text-white">
          <SignInButton />
        </div>
      )}
      {!!isSignedIn && (
        <div className="bg-red text-white">
          <UserButton />
        </div>
      )}
    </>
  );
};
