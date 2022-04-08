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
                    'h-12 placeholder-transparent border-b-2 peer focus:outline-none',
                    className
                )}
                type={type || 'text'}
            />
            <label
                htmlFor={name}
                className="absolute capitalize peer-focus:font-bold -top-3.5 left-0 text-base peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-lg peer-placeholder-shown:left-0 peer-focus:text-xl peer-focus:-top-3.5 transition-all"
            >
                {label}
            </label>
        </div>
    );
};

export default InputMaterial;
