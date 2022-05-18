export default function Forums() {
	return <>
		<div class="flex flex-row flex-wrap">
			<figure class="sm:basis-1 md:basis-1/2 lg:basis-1/3 items-center bg-slate-50 rounded-xl p-2 md:p-0 dark:bg-slate-600">
				<div class="pt-6 md:p-8 text-center md:text-left space-y-4 border-4 rounded-xl">
					<button class="rounded-xl p-5 md:p-2 dark:bg-slate-700">Javascript</button>
					<blockquote>
						<p class="text-sm font-medium">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quod sunt ea.
						</p>
					</blockquote>
					<figcaption class="font-medium">
						<div class="text-sky-500 p-1 dark:text-sky-400">
							Lorem, ipsum.
						</div>
						<div class="text-slate-700 p-1 dark:text-slate-500">
							Lorem, ipsum dolor.
						</div>
					</figcaption>
				</div>
			</figure>
			
		</div>
	</>;
}