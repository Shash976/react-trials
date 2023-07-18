function Nav(props) {
    const items = props.list.map((item, index) => <li key={index}>{item}</li>) 
    var ht = `<ul></ul>`
    ht.innerHTML = items
    return (
        <nav className="main-nav">
            {ht}
        </nav>
    );
};

export default Nav;