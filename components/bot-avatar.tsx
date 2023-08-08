import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const BotAvatar = () => {
	return (
		<Avatar className="h-9 w-9">
			<AvatarImage className="p-2 border rounded-full bg-zinc-50 flex items-center justify-center" src="/logo1.png" />
		</Avatar>
	);
};
