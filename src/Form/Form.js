import "./Form.scss";

export default function Form(props) {
    return (
        <div className='Form'>
            <form className='Form_container' id='pwForm' onSubmit={props.submitOutput}>
                <input className={'Form_input text '+ props.validate} id='currentPW'
                onChange={e => props.validateForm(e.target.value)}
                value={props.password}
                type='text' placeholder='Password123!'/>

                <button className='Form_btn'
                    value='Submit' type='submit'>
                    Submit
                </button>                
            </form>
        </div>
    )
}
