


function Header() {
    return (
        <header>
            <div class="container">
                <img src="logo.png" alt="Logo de la biblioteca" class="logo" width="auto" height="33%" />
        
                <div class="search-bar">
                    <input type="text" class="search" placeholder="Buscar en el catálogo"/>
                    <button type="submit" class="button">Buscar</button > 
                </div>
            </div>
        </header>
    );
  }
  
  export default Header;
  