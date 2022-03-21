export default function Footer() {
    const link = (
        <a href='https://www.kijana.io' target='_blank' rel="noreferrer" >
            Kijana
        </a>
    )
    return (
        <div className='Footer'>
            <footer className='Footer_text'>Not Programmed by&nbsp;{link}
            </footer>
        </div>
    )
}
