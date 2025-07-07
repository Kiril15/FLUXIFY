type SeparatorProps = {
    customClass?: string;
}

const Separator = ({customClass}: SeparatorProps) => {
    return (
        <div className={`absolute right-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#8176AF] to-transparent hidden lg:block ${customClass}`}></div>
    )
}

export default Separator;