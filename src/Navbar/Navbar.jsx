import styles from "./Navbar.module.css"
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Profile } from "./Profile";

const Tabs = styled.li`
cursor: pointer;
padding-left: 8px;
padding-right: 12px;
text-align: center;
padding-bottom: 10px;
border-bottom:${props => (props.tab === props.t) ? "2px solid white;" : "none"};
font-weight:${props => (props.tab === props.t) ? "500" : "none"};
font-size:${props => (props.tab === props.t) ? "14px" : "13px"};
`
export const Navbar = () => {
    const [tab, setTabs] = useState(1);
    const [user, setUser] = useState(false);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("login"));

        if (data) {
            setUser(true)
        }
        else {
            setUser(false)
        }
    }, [])



    return <> <div className={styles.main} >
        <div className={styles.navbarContainer}>
            <div className={styles.navbarUpperSection}>
                <div>
                    <Link to="/">
                        <svg height="24" width="144" viewBox="0 0 252 42" role="presentation" aria-hidden="true" focusable="false">
                            <path d="M15.592 22.92C15.591 20.283 13.924 18.652 11.348 18.652H7.738C6.58 18.815 6.055 19.518 6.055 20.877V26.783L11.348 26.79C13.966 26.79 15.591 25.629 15.592 22.92ZM6.055 13.391H10.819C13.496 13.391 14.449 11.689 14.449 9.911C14.449 7.576 13.057 6.181 10.735 6.181H8.025C6.671 6.268 6.055 6.966 6.055 8.428V13.391ZM21.815 23.351C21.815 28.956 17.536 32.87 10.912 32.87H0V4.87C0.02 3.085 1.872 1.285 3.64 1.218H10.777C16.737 1.218 20.587 4.222 20.587 9.202C20.587 12.462 18.959 14.346 17.988 15.183L17.152 15.9L18.109 16.441C20.432 17.751 21.815 20.333 21.815 23.351V23.351ZM148.135 20.675C148.135 15.58 145.385 14.986 143.325 14.986C139.165 14.986 138.845 19.175 138.845 20.459C138.845 23.376 140.105 26.49 143.665 26.49C145.705 26.49 148.135 25.48 148.135 20.675V20.675ZM154.045 9.738L154.025 30.732C154.025 38.739 148.045 41.584 142.505 41.584C139.815 41.584 136.845 40.858 134.555 39.639L134.105 39.4L134.835 37.53L135.345 36.243C135.905 34.855 136.715 34.509 138.095 34.928C139.155 35.312 140.735 35.739 142.475 35.739C146.045 35.739 148.015 34.05 148.015 30.994V30.356L147.505 30.732C146.215 31.72 144.575 32.205 142.505 32.205C136.445 32.205 132.215 27.445 132.215 20.63C132.215 13.811 136.305 9.228 142.385 9.228C145.445 9.228 147.325 10.309 148.375 11.221L148.675 11.482L148.855 11.132C149.325 10.23 150.275 9.738 151.515 9.738H154.045V9.738ZM67.707 21.184C67.707 17.473 65.411 14.877 62.137 14.877C58.877 14.877 56.608 17.473 56.608 21.184C56.608 24.898 58.878 27.496 62.138 27.496C65.464 27.496 67.708 24.958 67.708 21.184H67.707ZM74.088 21.184C74.088 28.054 69.052 33.04 62.138 33.04C55.234 33.04 50.228 28.054 50.228 21.184C50.228 14.318 55.234 9.331 62.138 9.331C69.052 9.331 74.088 14.318 74.088 21.184ZM105.445 32.677V13.281C105.445 10.941 104.335 9.806 102.025 9.806L99.465 9.796L99.485 27.5H99.465L99.485 32.87H105.445V32.677ZM122.505 9.278C119.175 9.278 117.055 10.765 115.865 12.018L115.465 12.423L115.325 11.873C114.975 10.529 113.795 9.788 112.025 9.788H109.165L109.185 32.683H115.225V22.131C115.225 21.099 115.365 20.205 115.635 19.387C116.355 16.914 117.995 15.378 120.525 15.378C122.555 15.378 123.725 16.453 123.725 19.232V29.203C123.725 31.573 125.195 32.683 127.555 32.683H129.785V18.261C129.785 12.475 127.825 9.278 122.505 9.278V9.278ZM91.436 21.777C91.1964 21.3119 90.8928 20.8827 90.534 20.502L90.326 20.281L90.546 20.069C90.862 19.734 91.186 19.338 91.497 18.878L97.584 9.795H90.195L85.622 16.899C85.363 17.28 84.84 17.472 84.058 17.472H82.48V4.045C82.48 1.36 80.642 0 78.84 0H76.414L76.42 32.691H82.48V23.183H83.63C84.375 23.183 84.883 23.269 85.118 23.675L88.729 30.518C89.736 32.375 90.743 32.691 92.635 32.691H97.651L93.915 26.488L91.436 21.777ZM41.648 21.184C41.648 17.473 39.358 14.877 36.079 14.877C32.819 14.877 30.553 17.473 30.553 21.184C30.553 24.898 32.819 27.496 36.079 27.496C39.405 27.496 41.649 24.958 41.649 21.184H41.648ZM48.028 21.184C48.028 28.054 43.002 33.04 36.079 33.04C29.182 33.04 24.177 28.054 24.177 21.184C24.177 14.318 29.182 9.331 36.079 9.331C43.002 9.331 48.027 14.318 48.027 21.184H48.028ZM98.764 3.81C98.764 1.704 100.464 0 102.544 0C104.634 0 106.334 1.704 106.334 3.81C106.334 5.911 104.634 7.617 102.544 7.617C100.464 7.617 98.764 5.911 98.764 3.81Z" fill="white"></path>
                            <path d="M187.08 25.067C187.06 25.088 184.38 27.915 180.87 27.915C177.66 27.915 174.42 25.941 174.42 21.538C174.42 17.73 176.93 15.071 180.53 15.071C181.7 15.071 183.02 15.492 183.23 16.198L183.26 16.318C183.74 17.919 185.19 18.001 185.47 18.001L188.88 18.005V15.021C188.88 11.085 183.89 9.65698 180.53 9.65698C173.35 9.65698 168.14 14.674 168.14 21.584C168.14 28.489 173.29 33.502 180.4 33.502C186.56 33.502 189.91 29.434 189.94 29.391L190.12 29.172L187.43 24.685L187.08 25.067ZM244.43 9.65698C241.73 9.65698 239.25 10.927 237.58 13.05L237.11 13.651L236.74 12.979C235.53 10.776 233.46 9.65698 230.57 9.65698C227.55 9.65698 225.53 11.35 224.58 12.358L223.97 13.024L223.73 12.144C223.39 10.877 222.26 10.178 220.56 10.178H218.06L218.04 32.984H224.01V22.917C224.01 22.036 224.12 21.163 224.34 20.248C224.93 17.816 226.56 15.202 229.3 15.462C230.99 15.626 231.81 16.936 231.81 19.466V32.984H237.44V22.917C237.44 21.813 237.55 20.99 237.79 20.162C238.3 17.842 240.37 15.459 243.02 15.459C244.93 15.459 245.93 16.545 245.93 19.466V29.649C245.93 31.954 247.28 32.984 249.57 32.984H251.99L252 18.424C252 12.607 249.45 9.65698 244.43 9.65698V9.65698ZM203.66 10.043C196.76 10.043 191.35 15.031 191.35 21.898C191.35 28.765 196.76 33.754 203.66 33.754C210.58 33.754 215.61 28.765 215.61 21.898C215.61 15.031 210.58 10.043 203.66 10.043V10.043ZM158.31 29.446C158.31 27.34 160 25.636 162.09 25.636C164.18 25.636 165.88 27.34 165.88 29.446C165.88 31.548 164.18 33.254 162.09 33.254C160 33.254 158.31 31.548 158.31 29.446ZM203.66 28.209C200.4 28.209 198.13 25.611 198.13 21.898C198.13 18.186 200.4 15.59 203.66 15.59C206.93 15.59 209.23 18.186 209.23 21.898C209.23 25.671 206.99 28.209 203.66 28.209Z" fill="#0896FF"></path>
                        </svg>
                    </Link>
                </div>
                <div className={styles.navbarUpperSectionItems}>
                    <ul>
                        <li className={styles.inr}>
                            INR
                        </li>
                        <li className={styles.indianFlag}>
                            <img src="https://cf.bstatic.com/static/img/flags/new/48-squared/in/20aa535a5d3c505dd02fea275ed1a36c0fb1fe08.png" alt="india's-flag" />
                        </li>
                        <li>
                            <svg className={styles.questionIcon} height="24" width="24" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0zM12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>
                        </li>
                        <li className={styles.propertyList}>
                            <button>List your property</button>
                        </li>
                        {
                            !user && <li className={styles.signButton}>
                                <Link to="/login">
                                    <button>Register</button>
                                </Link>
                            </li>}
                        {
                            !user && <li className={styles.signButton}>
                                <Link to="/login">
                                    <button>Sign in</button>
                                </Link>

                            </li>
                        }
                        {
                            user && <Profile />
                        }

                    </ul>

                </div>
            </div>
            <div className={styles.navbarLowerSection}>
                <ul>
                    <Tabs onClick={() => setTabs(1)} t={1} tab={tab}>

                        <svg className={styles.svgIcons} height="20" width="20" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path></svg>
                        <Link to="/" className={styles.Link}>

                            <p className={styles.text} >

                                Stays

                            </p>
                        </Link>
                    </Tabs>

                    <Tabs onClick={() => setTabs(2)} t={2} tab={tab}>
                        <svg className={styles.svgIcons} height="20" width="20" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M20.505 7.5l-15.266.022.672.415-1.1-2.2a.75.75 0 0 0-.638-.414l-2.293-.1C.82 5.228-.003 6.06.003 7.083c.002.243.051.484.146.709l2.072 4.68a2.947 2.947 0 0 0 2.701 1.778h4.043l-.676-1.075-2.484 5.168A1.831 1.831 0 0 0 7.449 21h2.099a1.85 1.85 0 0 0 1.419-.664l5.165-6.363-.582.277h4.956c1.82.09 3.399-1.341 3.49-3.198l.004-.134a3.426 3.426 0 0 0-3.44-3.419l-.074.001zm.02 1.5h.042a1.924 1.924 0 0 1 1.933 1.914l-.002.065a1.866 1.866 0 0 1-1.955 1.772l-4.993-.001a.75.75 0 0 0-.582.277l-5.16 6.355a.346.346 0 0 1-.26.118h-2.1a.336.336 0 0 1-.3-.49l2.493-5.185a.75.75 0 0 0-.676-1.075H4.924a1.45 1.45 0 0 1-1.328-.878l-2.07-4.676a.35.35 0 0 1 .326-.474l2.255.1-.638-.415 1.1 2.2a.75.75 0 0 0 .672.415L20.507 9zM16.323 7.76l-2.992-4.02A1.851 1.851 0 0 0 11.85 3H9.783a1.85 1.85 0 0 0-1.654 2.672l1.439 2.91a.75.75 0 0 0 1.344-.664L9.472 5.007a.351.351 0 0 1 .312-.507h2.066a.35.35 0 0 1 .279.14l2.99 4.017a.75.75 0 1 0 1.203-.896z"></path></svg>
                        <Link to="/flights" className={styles.Link}>
                        <p className={styles.text}>
                            Flights
                        </p>
                        </Link>
                    </Tabs>


                    <Tabs onClick={() => setTabs(3)} t={3} tab={tab}>
                        <svg className={styles.svgIcons} height="20" width="20" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M6.306 17.25a8.25 8.25 0 1 1 11.69-7.502.75.75 0 1 0 1.5 0A9.75 9.75 0 0 0 13.812.889C8.917-1.356 3.13.791.884 5.685-1.36 10.58.786 16.367 5.68 18.613a.75.75 0 0 0 .626-1.364zM3.756 3.5l5.28 2a.75.75 0 0 1 .475.851l-.313 1.57a.75.75 0 0 1-.554.58l-2.08.518a.75.75 0 0 0-.514.45l-1.154 2.884a2.242 2.242 0 0 1-.84 1.037l-1.84 1.263a.75.75 0 1 0 .85 1.236l1.83-1.257a3.731 3.731 0 0 0 1.393-1.722l1.153-2.884-.514.449 2.079-.52a2.25 2.25 0 0 0 1.661-1.74l.314-1.57a2.25 2.25 0 0 0-1.417-2.548l-5.277-2a.75.75 0 1 0-.532 1.403zm11.565-.57l-1.467 2.926a2.25 2.25 0 0 0-.122 1.718l.557 1.663a.75.75 0 1 0 1.422-.476L15.154 7.1a.75.75 0 0 1 .041-.572l1.466-2.924a.75.75 0 1 0-1.34-.672zm7.175 16.192v2.625a.75.75 0 0 1-.75.75h-10.5a.75.75 0 0 1-.75-.75v-5.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v2.625zm1.5 0v-2.625a2.25 2.25 0 0 0-2.25-2.25h-10.5a2.25 2.25 0 0 0-2.25 2.25v5.25a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-2.625zm-12-4.125v8.25a.75.75 0 0 0 1.5 0v-8.25a.75.75 0 0 0-1.5 0zm7.5 0v8.25a.75.75 0 0 0 1.5 0v-8.25a.75.75 0 0 0-1.5 0zm-4.5.002v-.75a1.5 1.5 0 0 1 3 0V15a.75.75 0 0 0 1.5 0v-.75a3 3 0 1 0-6 0V15a.75.75 0 0 0 1.5 0z"></path></svg>
                        <Link to="/flight-hotel" className={styles.Link}>

                        <p className={styles.text}>
                            Flight + Hotel
                        </p>
                        </Link>
                    </Tabs>
                    <Tabs onClick={() => setTabs(4)} t={4} tab={tab}>

                        <svg className={styles.svgIcons} height="20" width="20" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M21.684 9.443l-1.7-3.79c-.42-1.128-1.542-1.905-2.794-1.903H6.809a2.999 2.999 0 0 0-2.811 1.947L2.316 9.443a.75.75 0 1 0 1.368.614l1.7-3.79c.238-.63.798-1.018 1.424-1.017h10.383a1.5 1.5 0 0 1 1.407.973l1.718 3.834a.75.75 0 1 0 1.368-.614zM.75 16.468V18a2.25 2.25 0 0 0 4.5 0v-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 1-1.5 0v-1.532a.75.75 0 0 0-1.5 0zm21 0V18a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 0-1.5 0V18a2.25 2.25 0 0 0 4.5 0v-1.532a.75.75 0 0 0-1.5 0zM19.875 13.5a.375.375 0 0 1-.375-.375.75.75 0 0 0 1.5 0c0-.621-.504-1.125-1.125-1.125a.75.75 0 0 0 0 1.5zm.375-.375a.375.375 0 0 1-.375.375.75.75 0 0 0 0-1.5c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 0 1.5 0zm-.375-.375c.207 0 .375.168.375.375a.75.75 0 0 0-1.5 0c0 .621.504 1.125 1.125 1.125a.75.75 0 0 0 0-1.5zm-.375.375c0-.207.168-.375.375-.375a.75.75 0 0 0 0 1.5c.621 0 1.125-.504 1.125-1.125a.75.75 0 0 0-1.5 0zM4.125 12C3.504 12 3 12.504 3 13.125a.75.75 0 0 0 1.5 0 .375.375 0 0 1-.375.375.75.75 0 0 0 0-1.5zm1.125 1.125c0-.621-.504-1.125-1.125-1.125a.75.75 0 0 0 0 1.5.375.375 0 0 1-.375-.375.75.75 0 0 0 1.5 0zM4.125 14.25c.621 0 1.125-.504 1.125-1.125a.75.75 0 0 0-1.5 0c0-.207.168-.375.375-.375a.75.75 0 0 0 0 1.5zM3 13.125c0 .621.504 1.125 1.125 1.125a.75.75 0 0 0 0-1.5c.207 0 .375.168.375.375a.75.75 0 0 0-1.5 0zM2.75 10.5h18.5c.69 0 1.25.56 1.25 1.25v3.75a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25v-3.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 11.75v3.75c0 .966.784 1.75 1.75 1.75h20.5A1.75 1.75 0 0 0 24 15.5v-3.75A2.75 2.75 0 0 0 21.25 9H2.75z"></path></svg>
                        <Link to="/carrentals" className={styles.Link}>
                        <p className={styles.text}>
                            Car rentals
                        </p>
                        </Link>
                    </Tabs>
                    <Tabs onClick={() => setTabs(5)} t={5} tab={tab}>

                        <svg className={styles.svgIcons} height="20" width="20" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M13.5 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM15 3a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zM6 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zM21 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-9-3.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zM6 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm10.066 1.277a7.5 7.5 0 0 1-3.077 2.05.75.75 0 0 0 .498 1.415 9 9 0 0 0 3.693-2.46.75.75 0 1 0-1.114-1.005zm1.798-6.466c.177.922.183 1.869.015 2.792a.75.75 0 1 0 1.476.268c.2-1.106.194-2.24-.019-3.344a.75.75 0 1 0-1.472.284zm-5.337-5.784a7.5 7.5 0 0 1 3.54 2.196.75.75 0 0 0 1.113-1.004 9.002 9.002 0 0 0-4.247-2.636.75.75 0 1 0-.406 1.444zM6.434 6.223a7.5 7.5 0 0 1 3.539-2.196.75.75 0 1 0-.406-1.444A9.001 9.001 0 0 0 5.32 5.219a.75.75 0 0 0 1.114 1.004zM4.636 12.69a7.602 7.602 0 0 1 0-2.878.75.75 0 1 0-1.472-.284 9.102 9.102 0 0 0 0 3.446.75.75 0 0 0 1.472-.284zm4.876 5.639a7.517 7.517 0 0 1-3.035-2.005.75.75 0 0 0-1.106 1.014 9.017 9.017 0 0 0 3.641 2.405.75.75 0 1 0 .5-1.414zM7.31 21.872A1.5 1.5 0 0 0 8.672 24h6.656a1.5 1.5 0 0 0 1.362-2.128l-3.314-8.217c-.361-.785-1.252-1.114-2.005-.767a1.5 1.5 0 0 0-.733.734l-3.343 8.283zm1.377.595l3.328-8.25-.015.033 3.313 8.217.015.033H8.672z"></path></svg>
                        <Link to="/attractions" className={styles.Link}>

                        <p className={styles.text}>
                            Attractions
                        </p>
                        </Link>
                    </Tabs>
                    <Tabs onClick={() => setTabs(6)} t={6} tab={tab}>

                        <svg className={styles.svgIcons} height="20" width="20" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M21.75 15.5V8a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zm-16.5 0V8a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0zM3 8.75h3a.75.75 0 0 0 0-1.5H3a.75.75 0 0 0 0 1.5zm6.75 6.75v-6a.75.75 0 0 1 1.5 0v6a.75.75 0 0 0 1.5 0v-6a2.25 2.25 0 0 0-4.5 0v6a.75.75 0 0 0 1.5 0zM9 13.25h3a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5zm5.304-4.971l3 7.5a.75.75 0 0 0 1.392-.557l-3-7.5a.75.75 0 0 0-1.392.557zm3-.558l-3 7.5a.75.75 0 0 0 1.392.557l3-7.5a.75.75 0 0 0-1.392-.557zM.75 5h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zm0 15h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5z"></path></svg>
                        <Link to="/airport-taxis" className={styles.Link}>

                        <p className={styles.text}>
                            Airport taxis
                        </p>
                        </Link>
                    </Tabs>
                </ul>
            </div>
        </div>
    </div>
    </>
}