import React  from "react";
import SocialGridItem from "./SocialGridItem";

const SocialGrid = ({ socialLinks }) => {

    return (
        <div className="social-grid">
            {socialLinks.map((socialLink, index) => {
                return (
                    <SocialGridItem
                        key={index}
                        socialLink={socialLink}
                    />
                );
            }
            )}
        </div>
    );
};

export default SocialGrid;