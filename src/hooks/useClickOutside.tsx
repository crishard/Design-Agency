import { useEffect } from 'react';

export const useClickOutside = (
    ref: React.RefObject<HTMLElement>,
    triggerRef: React.RefObject<HTMLElement>, // Botão de "Services"
    callback: () => void
) => {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                ref.current && !ref.current.contains(event.target as Node) && // Clique fora do menu
                triggerRef.current && !triggerRef.current.contains(event.target as Node) // Clique fora do botão
            ) {
                callback();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, triggerRef, callback]);
};
