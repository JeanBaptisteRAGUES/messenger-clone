import { useParams } from "next/navigation";
import { useMemo } from "react";

const useConversation = () => {
    const params = useParams();

    const conversationId = useMemo(() => {
        if(!params?.conversationId) {
            return '';
        }
    }, [params?.conversationId]);

    // !! transforme un type string en type boolean
    const isOpen = useMemo(() => !!conversationId, [conversationId]);

    return useMemo(() => ({
        isOpen,
        conversationId
    }), [isOpen, conversationId]);
}

export default useConversation;