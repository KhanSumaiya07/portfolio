import React from 'react'
import ProjectBox from './projectBox'


const Project = () => {
    var img = 'https://images.unsplash.com/photo-1617469955236-7f13d137a4f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    return (
        <div>
            <div className='Project-section sec-padding'>
                <div className='heading'>
                    <h2>My<mark> Projects</mark> </h2>
                </div>
                <div className='project-wrapper'>
                    <ProjectBox
                    projImg={img}
                    projName={'Beauty & Personal Care Mobile App'}
                    projType={'UI/UX Design'}
                    projPara={'This mobile app enhances the beauty and personal care experience with an intuitive interface.'}
                    />
                    <ProjectBox
                    projName={'Luxury Furnishing Web Application'}
                    projType={'Frontend Development'}
                    projPara={'This mobile app enhances the beauty and personal care experience with an intuitive interface.'}
                    />
                    <ProjectBox
                    projName={'E-Commerce Website Dashboard'}
                    projType={'Frontend Development'}
                    projPara={'This mobile app enhances the beauty and personal care experience with an intuitive interface.'}
                    />

                </div>
            </div>
        </div>
    )
}

export default Project
