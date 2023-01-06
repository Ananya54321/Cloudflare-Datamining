{
	account_id: "Account ID",
	account_hash: "Account hash",
	show: "Show",
	image_delivery_url: "Image Delivery URL",
	add_storage_capacity: "add storage capacity",
	change_subscription: "Change Subscription",
	cloudflare_images: "Cloudflare Images",
	stream: "Stream",
	continue: "Continue",
	included: "Included",
	back: "Back",
	abort: "Abort",
	item: "Item",
	content: "Content",
	agreement: {
		description: `Use Cloudflare Images to store, resize and deliver images affordably.

**Resizing: Free**
You can create up to 20 variants.

**Storage: $5.00 per 100,000 images (prepaid)**
You only pay for the original image. If you have 10 original images with 5 configured variants, only the 10 original images count towards your storage limit.

**Delivery: $1.00 per 100,000 images served (postpaid)**
You will only be billed for number of images served.`
	},
	current_usage: {
		images_basic: "",
		images_stream_bundle_basic: "You are currently subscribed to the Starter Bundle which includes 100,000 images (as well as 1,000 minutes of video with Cloudflare Stream).",
		images_stream_bundle_basic_short: "You are currently subscribed to the Starter Bundle.",
		images_stream_bundle_advanced: "You are currently subscribed to the Creator Bundle which includes storage of 500,000 images (as well as 10,000 minutes of video with Cloudflare Stream).",
		images_stream_bundle_advanced_short: "You are currently subscribed to the Creator Bundle."
	},
	allow_embedding_everywhere: "Allow embedding everywhere",
	api_key: "API Key",
	api_token: "API Token",
	allowed_origins_limit: "You may only specify up to 10 allowed origin domains.",
	billing: {
		select_plan: "Select Plan",
		bundle_modal_selection_description: "You can purchase Cloudflare Images on its own or bundle it with Cloudflare Stream.",
		bundle_page_selection_description: "Use Cloudflare Images to store, optimize, and deliver your images. Purchase Cloudflare Images on its own or bundle it with Cloudflare Stream.",
		bundle_page_existing_subsciption_description: `Use Cloudflare Images to store, optimize, and deliver your images.
**You have an existing subscription to Cloudflare Stream. You can purchase Starter or Creator bundles only when your Cloudflare Stream subscription is canceled and has ended.**`,
		bundle_cloudflare_images_title: "Cloudflare Images",
		bundle_basic_title: "Starter Bundle",
		bundle_advanced_title: "Creator Bundle",
		bundle_starting_at: "Starting at",
		bundle_cloudflare_images_price: "$5 / month",
		bundle_basic_price: "$10 / month",
		bundle_advanced_price: "$50 / month",
		bundle_cloudflare_images_description: "Store, resize, optimize and serve images at scale.",
		bundle_basic_short_description: "Includes 1,000 minutes of video and 100,000 images",
		bundle_basic_description: "Store up to 100,000 images and 1,000 minutes of video content. Deliver up to 500,000 images and 5,000 minutes of video content each month.",
		bundle_basic_additional_images_description: "The Starter Bundle includes 100,000 images.",
		bundle_advanced_short_description: "Includes 10,000 minutes of video and 500,000 images",
		bundle_advanced_description: "Store up to 500,000 images and 10,000 minutes of video content. Deliver up to 1,000,000 images and 50,000 minutes of video content each month.",
		bundle_advanced_additional_images_description: "The Creator Bundle includes 500,000 images.",
		bundle_save_up_to: (0, t.d)(U(), "amount"),
		single_product_feature_1: "Up to 20 variants per image at no extra cost",
		single_product_feature_2: "Automatic image optimization in formats including WebP and AVIF",
		single_product_feature_3: "Direct Creator Uploads",
		single_product_feature_4: "Creator-friendly API",
		bundle_feature_1: "All the features of Cloudflare Stream and Cloudflare Images",
		bundle_feature_2: "Creator-friendly API",
		bundle_feature_3: "Add extra Image and Video storage capacity as you grow",
		billed_now: "billed now:",
		frequency: "per month",
		images: {
			subtitle: "in 100,000 images",
			title: "Images Storage Capacity",
			additional_title: "Additional Images Storage Capacity"
		},
		stream: {
			additional_title: "Additional Stream Storage Capacity"
		},
		recurring: "recurring monthly",
		storage: {
			rate: "$5 for every 1,000 minutes stored"
		},
		title: "Confirm Payment",
		total: {
			description: "Your estimated billing not including minutes viewed"
		},
		views: {
			description: "This is charged based on usage",
			rate: "per 1,000 minutes viewed"
		}
	},
	configuration: {
		storage: {
			title: "Add Storage",
			mins: {
				oneM: "1,000,000 images",
				oneHundredK: "100,000 images",
				twoHundredK: "200,000 images",
				custom: "Custom"
			}
		}
	},
	curl_command: "cURL command",
	edit_image_custom_id_error: "Images with a custom IDs cannot be set to private",
	drop_here_or_browse: "Drop images here or click to browse",
	image_url: "Image URL",
	video_url: "Video URL",
	preview: "Preview",
	customization_options: "Customization Options",
	blurring: "Blurring",
	resizing_options: "Resizing Options",
	resizing_options_description: "IMAGESTODO",
	w: "W",
	public_access: "public access",
	h: "H",
	fit: "Fit",
	fit_description: "IMAGESTODO",
	metadata: "Metadata",
	metadata_description: "IMAGESTODO",
	signed_urls: "Signed URLs",
	signed_urls_description: `Checking \u201CAlways allow public access\u201D overrides image-level access control.
If checked, images that require signed URLs can be accessed publicly.`,
	previous: "Previous",
	next: "Next",
	category_name: "Category Name",
	image_file_name: "Image File Name",
	image_id: "Image ID",
	video_id: "Video ID",
	video_link: "Video Link",
	storage: {
		usage: (0, t.d)(T(), "current"),
		inadequateProposedPlan: (0, t.d)(x(), "minumumRequired", "current"),
		inputGreaterThanZero: "Please enter a number greater than zero",
		inputWholeNumber: "Please enter a whole number",
		howToCancel: (0, t.d)(R(), "accountId"),
		description: "Storage is $5 per 100,000 images stored. You can change the storage amount.",
		title: "**Select storage capacity.**",
		additional_title: "**Select additional storage capacity.**"
	},
	modal_add_storage_custom_calculation: (0, t.d)(E(), "value"),
	modal_add_extra_storage_custom_calculation: (0, t.d)(P(), "value"),
	modal_extra_minutes_of_video: (0, t.d)(D(), "value"),
	modal_total_storage: (0, t.d)(j(), "value"),
	subscription: {
		error: "There was an error enabling Images",
		success: "Created Images subscription successfully",
		success_updated: "Updated Images subscription successfully",
		title: "Get Started with Cloudflare Images"
	},
	page_title: "Images",
	usage_title: "Transparent Pricing",
	onboarding_ga_enterprise_title: "Welcome!",
	onboarding_custom_title: "Welcome!",
	onboarding_ga_enterprise_description: "Images is an image platform that allows you to store, resize and deliver images affordably. Contact your Customer Success Manager to get started.",
	onboarding_custom_description: "Images is an image platform that allows you to store, resize and deliver images affordably. Contact Cloudflare Support to get started.",
	quick_upload: "Quick Upload",
	stream_page_no_videos: "No videos found.",
	images_page_no_images: "The place for all your images.",
	images_page_no_variants: "No variants found.",
	edit: "Edit",
	delete: "Delete",
	delete_selected: "Delete selected",
	cancel: "Cancel",
	save: "Export",
	save_change: "save",
	save_selected: "Export selected",
	error: "Error",
	errors: "Errors",
	error_loading_keys_required_to_generate_preview: "Error loading keys required to generate preview.",
	question_mark: "?",
	banners_low_storage_capacity_contract_customer: (0, t.d)(A(), "percentRemaining"),
	banners_low_storage_capacity_payg: (0, t.d)(C(), "percentRemaining"),
	banners_no_remaining_capacity_contract_customer: (0, t.d)(k()),
	banners_no_remaining_capacity_payg: (0, t.d)(S()),
	embed: "Embed",
	require_signed_urls: "Require Signed URLs",
	get_keys_here: "(Get an API key here)",
	get_tokens_here: "(Get an API token here)",
	name: "Name",
	require_signed_urls_tooltip: "Click to see help for setting up signed URLs",
	resume_card_paused: "Paused upload",
	total_minutes_watched: "Total Minutes Watched:",
	toast_success: "Video saved successfully",
	toast_error: "There was an error saving the video",
	toast_info: "Saving video...",
	upload_using_api_desc: `Try out the API by entering the fields then pasting the cURL command below into your terminal.

To read the full docs, [click here](https://developers.cloudflare.com/images).`,
	upload_with_a_link: "Upload with a link",
	upload_with_a_link_desc: "Link to a video and it will be uploaded and made available on Stream.",
	uploading: "Uploading",
	uploaded: "Uploaded",
	actions: "Actions",
	created: "Created",
	pendingupload: "Pending Upload",
	ready: "Ready",
	video_status: "Status",
	view_documentation: "View documentation",
	image_has_security_features_on: "This image has security features turned on",
	duration: "Duration",
	use_api: "Use API",
	use_link: "Use Link",
	player_api_docs: "Player API Documentation",
	search_meta_name: "Search",
	video: "Video",
	image: "Image",
	images: "Images",
	back_to_images: "Back to Images",
	back_to_variants: "Back to Variants",
	videos: "Videos",
	video_error: "%{name} - Error",
	video_card_get_link: "Get Link",
	video_card_get_embed_code: "Get Embed Code",
	video_card_embed_code: "Embed Code",
	image_card_delete_image_modal_title: "Delete Image?",
	image_card_bulk_delete_image_modal_title: (0, t.d)(O(), "count"),
	image_card_delete_variant_modal_title: "Delete Variant?",
	image_card_delete_image_modal_prompt: "Are you sure you want to permanently delete this image?",
	image_card_bulk_delete_image_modal_prompt: "Are you sure you want to permanently delete all selected images?",
	image_card_delete_variant_modal_prompt: "Are you sure you want to permanently delete this variant?",
	x_of_y: (0, t.d)(I(), "x", "y"),
	video_card_views: "views",
	video_card_watched: "watched",
	queued: "Queued",
	downloading: "Downloading",
	processing: "Processing",
	video_card_progress_queued: "Queued for processing",
	video_card_progress_processing: "Processing %{pctComplete}% complete",
	video_card_progress_ready: "Ready to stream",
	hi: "Ready to stream",
	image_requires_signed: "Viewing requires signed URLs",
	views: "Views",
	view_angular_component: "View Angular component",
	view_react_component: "View React component",
	view_on_npm: "View on NPM",
	view_as_json: "View as JSON",
	json_body: "JSON Body",
	json: "JSON",
	return_to_editing: "Return",
	storage_usage: (0, t.d)(w(), "current"),
	analytics_title: "Usage",
	analytics_usage: (0, t.d)(y(), "requests"),
	storage_capacity: (0, t.d)(g(), "allowed", "percentRemaining"),
	storage_capacity_ent: "To modify your Images usage limits, please contact your Customer Success Manager.",
	unknown_error: "An unknown error has occurred",
	output_confirm_delete_title: "Delete Output?",
	output_confirm_delete_body: (0, t.d)(i(), "outputUrl"),
	refresh: "Refresh",
	developer_resources: "Developer Resources",
	get_help: "Get Help",
	direct_creator_uploads: "Direct Creator Uploads",
	developer_docs: "Developer Docs",
	community_forum: "Community Forum",
	faqs: "FAQs",
	request_a_feature: "Request a Feature",
	docs: "Docs",
	image_loading_error: "An error occurred while loading the image.",
	image_upload_error: "An error occurred while uploading the image.",
	image_invalid_format: "Invalid image format",
	variant_loading_error: "An error occurred while loading the variant.",
	variants_loading_error: "An error occurred while loading the variants.",
	keys_loading_error: "An error occurred while loading the keys.",
	unsaved_changes_warning: "Are you sure? Unsaved changes will be lost.",
	curl_example: "cURL example",
	response_body: "Response body",
	key: "Key",
	url: "URL",
	createdRelativeTimeAgo: (0, t.d)(m(), "relativeTimeUnitsAgo"),
	keys: "Keys",
	variants: "Variants",
	sourcing_kit: "Sourcing Kit",
	sourcing_kit_waitlist: {
		benefits: {
			benefit1: "<b>Easy.</b> Create and save definitions for one or more sources containing the images you want to migrate to Cloudflare Images.",
			benefit2: "<b>Flexible.</b> Define the path and filename for your uploaded images."
		},
		subheading: "Define sources from where you can migrate all your images into Cloudflare Images.",
		button: {
			requested: "Access Requested",
			request: "Join Waitlist"
		}
	},
	sourcing_kit_description: "Define a source to import your images to Cloudflare Images",
	sources: "Sources",
	start_import: "Import images",
	ongoing_migration_hint: "Please wait for ongoing imports to complete before starting a new one.",
	sources_description: "Creating a source allows you to import images easily from other platforms.",
	sources_quota_info: (0, t.d)(_(), "consumed", "allowed"),
	sourcing_kit_info: {
		image_size: (0, t.d)(o(), "maxImageSize"),
		image_type: (0, t.d)(l())
	},
	images_description: "Store, resize and deliver images",
	migrations: "Imports",
	migration_status: {
		SUCCESS: "Done",
		PROCESSING: "Importing",
		ERROR: "Error",
		ABORTED: "Aborted",
		PENDING: "Pending"
	},
	view_plan: "View plan",
	source_name: "Source name",
	import_job: "Import job",
	start_date: "Start date",
	status: "Status",
	last_updated: "Last updated",
	no_search_results: (0, t.d)(c(), "value"),
	sourcing_kit_wizard_title: "Import images",
	source_credential_hint: "We were unable to validate the credentials of this source",
	source_select_description: "Select or define a source to start importing photos from your external source.",
	source_create_description: "Define a source to start importing photos from your external source.",
	create_new_source_button: "Define a new source",
	migration_table_empty_msg: "No sources have been defined. Click <b>Import images</b> to get started.",
	empty_table_page: "There are no results on this page. Please use the back button to go to the previous page.",
	sources_table_empty_msg: "No sources have been defined. Click <b>Import images</b> to get started.",
	create_source_form: {
		source_name: "Source name",
		source_name_placeholder: "Create a name for your source",
		source_information: "Source information",
		source_information_title: "Amazon S3 bucket information",
		bucket_name: "Bucket name",
		bucket_name_placeholder: "Enter the bucket name",
		region: "Region",
		last_updated: "Last updated",
		region_placeholder: "Select the aws region of the bucket",
		required_credentials: "Required credentials",
		credentials: "Credentials",
		credentials_description: {
			s3: "Generate appropriate keys via AWS Identity and Access Management (IAM). Sourcing Kit requires read access to your bucket."
		},
		source_url_hint: "Currently, only Amazon S3 is supported. Enter the bucket name where images are stored.",
		test_credentials: "Test credentials",
		find_credentials: "Find credentials",
		credential_error: "Unable to access bucket with the given credentials.",
		username: {
			s3: "Access key ID"
		},
		username_placeholder: {
			s3: "Enter access key ID"
		},
		access_key_placeholder: {
			s3: "Enter the access key"
		},
		access_key: {
			s3: "Access key"
		},
		test_credentials_description: "Both user name and access key are required to establish the test connection. They can be found on your S3 account."
	},
	no_variants_svg_message: "SVG images are scalable by default. Variants do not apply to SVG images.",
	define_rules_form: {
		define_rules: "Define rules",
		advanced_rules: "Advanced rules",
		exclude_image_files: "Exclude image files?",
		exclude_image_files_decription: (0, t.d)(p()),
		source_created: "Source was created successfully.",
		bucket_root_path: "Amazon S3 root path (optional)",
		bucket_root_path_hint: "Specify the root path you want to import images from.",
		images_path: "Add a prefix to your delivery path (optional)",
		images_path_hint: "You can find imported images in the URL below after successful import.",
		overwrite_images: "Overwrite images?",
		overwrite_images_description: "Overwrite or skip imported images with existing paths and names in Cloudflare Images.",
		yes_overwrite: "Yes, overwrite (recommended)",
		yes_overwrite_description: "Choose this option if you want new files to replace old files with the same path and name.",
		no_overwrite: "No, skip",
		no_overwrite_description: "Choose this option if you want to keep old files and ignore new files with the same path and name."
	},
	abort_migration_title: "Abort importing images?",
	abort_migration_text: "If you abort, Cloudflare will stop importing images to your account. However, images already copied to your account will be kept.",
	storage_warning: "You have reached more than 90% of your Cloudflare Images upload quota. The importing job will be aborted if you reach 100%. To avoid problems with your importing jobs, <0>upgrade your Images plan</0>.",
	review: {
		imported_path: "Imported images path",
		overwrite: "Overwrite",
		no_overwrite: "Do not overwrite"
	},
	source_detail: {
		source_detail: "Source details",
		delete_source_modal_title: "Delete source?",
		delete_source: "Delete source",
		rename_source: "Rename source",
		new_name: "New source name",
		delete_source_description: "Deleting a source is permanent, cannot be undone, and also deletes the connection between Cloudflare and your external source."
	},
	migration_summary: {
		import_summary: "Import summary",
		back_btn: "Back to Sourcing Kit",
		migration_status: "Import status",
		objects_found: "Objects found",
		root_path: "Amazon S3 root path",
		migrated_images: "Imported images",
		error_log: "Migration log",
		start_date_hint: (0, t.d)(d(), "date", "time"),
		end_date_hint: (0, t.d)(s(), "date", "time"),
		storage_exhaused_error: "The import was aborted due to a lack of storage space. To use the service, <0>upgrade your Images plan</0>.",
		active_import_alert: "Your images are now being imported. You can check the progress below or come back later from the <0>Sourcing Kit main page</0>."
	},
	log_parsing_error: "Error parsing progress logs",
	valid: "Valid",
	invalid: "Invalid",
	source_deleted: "Source deleted",
	define_rules: "Define rules",
	select_source: "Select a source",
	review_import: "Review and import",
	variants_description: "Variants can be configured to deliver the most optimal image for your use-cases.",
	variants_create_format_error: "Alphanumeric characters only",
	variants_create_required_error: "Provide a variant name",
	variants_create_conflict_error: "Variant name already in use",
	learn_more: "Learn more",
	keys_description: "Keys are used to generate signature tokens required for accessing images marked private.",
	about_images: "About Images",
	about_variants: "About Variants",
	about_keys: "About Keys",
	variant_name: "Variant name",
	token: "API Token",
	no_variants: "No variants",
	add_variant: "Add Variant",
	add_new_variant: "Add New Variant",
	variant_page_title: (0, t.d)(u(), "variantName"),
	beta: "Beta",
	guidance_and_feedback: "Guidance & Feedback",
	guidance_description: "For <b>guidance</b> on Sourcing Kit\u2019s capabilities, refer to our developer documentation. For bug reporting or <b>feedback</b>, join the #images Discord channel, or use our Community board.",
	discord_channel: "Images Discord Channel",
	join_discord_server: "Join Discord Server",
	sourcing_kit_feedback_banner_description: "We added Images Sourcing Kit. <0>Tell us what you think.</0>",
	flexible_variants_settings: {
		title: "Flexible variants",
		enable_modal_title: "Enable flexible variants",
		enable_modal_description: "Enabling flexible variants on your account effectively allows anyone to obtain untransformed, full-resolution images and their metadata by changing variant properties in the URL.",
		disable_modal_title: "Disable flexible variants",
		disable_modal_description: "Existing URLs using flexible variants will no longer work after this feature is disabled.",
		description: "Flexible variants allow you to create variants with dynamic resizing. Once activated, it is possible to use resizing parameters on any Cloudflare Image."
	}
}