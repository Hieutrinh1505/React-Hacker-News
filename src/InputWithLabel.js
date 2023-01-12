import * as React from "react";
import styled from "styled-components";
const StyledLabel = styled.label`
  border-top: 1px solid #171212;
  border-left: 1px solid #171212;
  padding-left: 5px;
  font-size: 24px;
`;
const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #171212;
  background-color: transparent;
  font-size: 24px;
`;

const InputWithLabel = ({
    id,
    value,
    type = "text",
    onInputChange,
    children,
    isFocused,
}) => {
    const inputRef = React.useRef();
    React.useEffect(() => {
        console.log(inputRef.current);
        if (isFocused && inputRef.current) {
            // D
            inputRef.current.focus();
        }
    }, [isFocused]);
    return (
        <>
            <StyledLabel htmlFor={id}>{children}</StyledLabel>
            &nbsp;
            <StyledInput
                ref={inputRef}
                id={id}
                type={type}
                value={value}
                onChange={onInputChange}
            />
        </>
    );
};

export {InputWithLabel}
