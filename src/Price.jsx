export default function Price({oldPrice,newPrice}) {
    let oldstyles = {
        textDecoration : "line-through",
    }
    let newstyles = {
        fontWeight : "bold",
    }
    let styles = {
        backgroundColor : "#e0c367",
        height : "30px",
        with: "250px",
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
    }
    return (
        <div style={styles}>
        <span style={oldstyles}>{oldPrice}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span style={newstyles}>{newPrice}</span>
        </div>
        
    );
    
}