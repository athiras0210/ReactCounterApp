import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

function Footer() {
    return (
        <div>
            <MDBFooter className='text-center text-dark bg-info'>
                <MDBContainer className='pt-4'>
                    <section className='mb-4'>
                        <MDBBtn
                            rippleColor="dark"
                            color='link'
                            floating
                            size="lg"
                            className='text-dark m-1'
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab className='fab fa-facebook-f' />
                        </MDBBtn>

                        <MDBBtn
                            rippleColor="dark"
                            color='link'
                            floating
                            size="lg"
                            className='text-dark m-1'
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab className='fa-twitter' />
                        </MDBBtn>

                        <MDBBtn
                            rippleColor="dark"
                            color='link'
                            floating
                            size="lg"
                            className='text-dark m-1'
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab className='fa-google' />
                        </MDBBtn>

                        <MDBBtn
                            rippleColor="dark"
                            color='link'
                            floating
                            size="lg"
                            className='text-dark m-1'
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab className='fa-instagram' />
                        </MDBBtn>

                        <MDBBtn
                            rippleColor="dark"
                            color='link'
                            floating
                            size="lg"
                            className='text-dark m-1'
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab className='fa-linkedin' />
                        </MDBBtn>

                        <MDBBtn
                            rippleColor="dark"
                            color='link'
                            floating
                            size="lg"
                            className='text-dark m-1'
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab className='fa-github' />
                        </MDBBtn>
                    </section>
                </MDBContainer>

                <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2024 Copyright:
                    <a className='text-dark' href='https://mdbootstrap.com/'>
                        counterapp.com
                    </a>
                </div>
            </MDBFooter>
        </div>
    )
}

export default Footer