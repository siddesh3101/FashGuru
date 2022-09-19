import React from 'react'

const NavLinks = () => {
    const links = [{name : "Men"},{name:"women"},{name:"kids"}];
  return(
    <>
    {
        links.map((link)=>(
            <div>
                <div>
                    <h1>{link.name}</h1>
                </div>
            </div>
        ))
      }
      </>
  );
}

export default NavLinks