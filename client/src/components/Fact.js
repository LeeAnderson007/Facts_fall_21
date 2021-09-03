import React from "react";

const Fact = ({id, text, stars, username, source}) => {
    return (
        <div style={styles.container}>
            <h3>{text}</h3>
            <p>{stars}</p>
            <p>{username}</p>
            <div style={style.info}>
            <p>{source}</p>
            </div>
        </div>
    );
};

const styles = {
    border: {
        border: "1px solid",
    },
    info: {
        display: "flex",
    }
    
    container:{
        display:"flex",
        justContent: "space-container",
        flexDirection: "column",
        margin:"20px",
        padding:"20px",
        boxShadow:
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    },
};

export default Fact;