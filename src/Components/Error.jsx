
const Error = () => {
    return(
     <div style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Arial'
     }}>
        <p style={{
            fontFamily: 'Arial',
            fontWeight: 500,
            fontStyle: 'Medium',
            fontSize: '110px',
            leadingTrim: 'NONE',
            lineHeight: '115px',
            letterSpacing: '3%'
        }}>
            404 Not Found
        </p>
        <p style={{
            fontFamily: 'Arial',
            fontWeight: '400',
            fontStyle: 'Regular',
            fontSize: '16px',
            leadingTrim: 'NONE',
            lineHeight: '24px',
            letterSpacing: '0%',
            position:'relative',
            bottom:'80px'
        }}>
            Your visited page not found. You may go home page.
        </p>
        <a href="" style={{
            display: 'block',
            textAlign:'center',
            width: '200px',
            textDecoration:'none',
            padding: '10px 1px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#db4444',
            color: 'white'
        }}>
            Back to home page
        </a>
     </div>
    )
};
export default Error;