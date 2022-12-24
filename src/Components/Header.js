import React from 'react'


function Header() {
  return (
    <div className="container-fluid px-5 d-none d-lg-block">
        <div className="row gx-5 py-3 align-items-center">
            <div className="col-lg-3">
                <div className="d-flex align-items-center justify-content-start">
                    <i className="bi bi-phone-vibrate fs-1 text-primary me-2"></i>
                    <h6 className="mb-0">694 56 99 51 / 698 28 87 29</h6>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="d-flex align-items-center justify-content-center">
                    <a href="index.html" className="navbar-brand ms-lg-5">
                        <h1 className="m-0 display-4 text-primary"><span className="text-secondary">AP</span>AD</h1>
                    </a>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="d-flex align-items-center justify-content-end">
                    <a className="btn btn-primary btn-square rounded-circle me-2" href="https://twitter.com/Mbouombouoissa1?t=Ghi4rWLUwRKhhQm8EfZUcw&s=08/"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-primary btn-square rounded-circle me-2" href="https://facebook.com/groups/363104665765549/"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-primary btn-square rounded-circle" href="https://instagram.com/ap.ad92?igshid=YmMyMTA2M2Y/"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header