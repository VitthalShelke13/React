export default function InlineStyle(){
    let style2={
        background:'green',
        color:'yellow'
    }

    

      let buttonStyle={
            backgroundColor:'yellow',
            padding:'10px 20px',
            margin:'20px',
            color:'#fff',
            border:'1px solid #333',
            borderRadius:'5px',
            fontWeight:'800'

        }
    

    return(
        <>
        <div style={{color:'red',background:'blue',margin:'20px'}}>InLine Style part 1</div>
        <div style={style2}>InLine Style part 2</div>
        <button style={buttonStyle}>click me</button>
        </>
    )
}