import clsx from 'clsx';
import React from 'react';

type InputMaterialProps = {
    labelClassName?: string;
} & React.HTMLProps<HTMLInputElement>;

const InputMaterial: React.FC<InputMaterialProps> = ({
    name,
    label,
    placeholder,
    type,
    className,
}) => {
    return (
        <div className="relative">
            <input
                name={name}
                id={name}
                placeholder={placeholder || 'hold'}
                className={clsx(
                    'h-10 placeholder-transparent border-b-2 peer focus:outline-none',
                    className
                )}
                type={type || 'text'}
            />
            <label
                htmlFor={name}
                className="absolute capitalize -top-3.5 left-0 text-xs  peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:left-0 peer-focus:text-xs peer-focus:-top-3.5 transition-all"
            >
                {label}
            </label>
        </div>
    );
};

export default InputMaterial;
