import { AuthData } from "../../auth/AuthWrapper"

export const Account = () => {

     const { user } = AuthData();

     return (
          <div className="page1">
               <h2>Your Account</h2>
               <p>Username: {user.name}</p>
          </div>
     )
}