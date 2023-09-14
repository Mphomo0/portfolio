import Image from "next/image";

// Define the Skill component
const Skill = ({ source, alt, title }) => {
    // Render an Image component with the specified props
    return <Image src={source} alt={alt} title={title} width={75} height={75} />;
};

// Export the Skill component
export default Skill;
