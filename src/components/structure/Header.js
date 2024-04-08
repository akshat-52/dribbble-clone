export const RenderHeader = () => {

     return (
          <div className="header">
               <div className="logo">
                    <img onClick={() => { window.location.href = "https://www.dribbble.com" }} src="/dribble.png" alt="dribbble logo" />
               </div>
               {/* <h1>Aeonaxy Project Task</h1> */}
          </div>
     )
}