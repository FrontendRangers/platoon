export interface UseCheckboxGroupProps {
    value?: string;
}

export const useCheckboxGroup = (props: UseCheckboxGroupProps = {}) => {
    const { value } = props;
    return { value };
};
