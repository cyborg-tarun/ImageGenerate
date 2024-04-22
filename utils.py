from diffusers import AutoPipelineForText2Image
import torch
import nltk
from nltk.corpus import wordnet as wn
import random
nltk.download('wordnet')


pipe = AutoPipelineForText2Image.from_pretrained("stabilityai/sdxl-turbo", torch_dtype=torch.float16, variant="fp16")
pipe.to("cuda")

def generate_image(prompt):
    image_path = f"{prompt.replace(' ', '_')}.jpg"
    image = pipe(prompt=prompt, num_inference_steps=1, guidance_scale=0.0).images[0]
    image.save(image_path)
    return image_path


def generate_related_words(current_word):
    final_list = []
    
    prompt_synsets = wn.synsets(current_word, pos=wn.NOUN)
   
 
    
    related_words = set()
    for synset in prompt_synsets:
    # Hyponyms
        for hyponym in synset.hyponyms():
            related_words.update(lemma.name().replace('_', ' ') for lemma in hyponym.lemmas())
 
       
    if related_words:
        final_list.append(random.sample(related_words, 3))
 
    return final_list








