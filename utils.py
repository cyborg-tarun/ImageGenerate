from diffusers import AutoPipelineForText2Image
import torch

pipe = AutoPipelineForText2Image.from_pretrained("stabilityai/sdxl-turbo", torch_dtype=torch.float16, variant="fp16")
pipe.to("cuda")

def generate_image(prompt):
    image_path = f"{prompt.replace(' ', '_')}.jpg"
    image = pipe(prompt=prompt, num_inference_steps=1, guidance_scale=0.0).images[0]
    image.save(image_path)
    return image_path