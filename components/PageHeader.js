import React from 'react';
import Link from 'next/link';

const PageHeader = (props) => {
        return (
            <section className="inner-banner">
                <span className="banner-two__shape-1"></span>
                <span className="banner-two__shape-2"></span>
                <span className="banner-two__shape-3"></span>
                <span className="banner-two__shape-4"></span>
                <div className="container">
                    <ul className="list-unstyled thm-breadcrumb">
                        <li><Link href="/"><a>Anasayfa</a></Link></li>
                        <li className="active"><a href="#">{props.title}</a></li>
                    </ul>
                    <h2 className="inner-banner__title">{props.title}</h2>
                </div>
            </section>

        )
}
export default PageHeader;
