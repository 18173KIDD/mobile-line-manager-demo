import { z } from 'zod';
import { githubRequest } from '../common/utils.js';

// Schema definitions
export const EnablePagesSchema = z.object({
    owner: z.string().describe('Repository owner (username or organization)'),
    repo: z.string().describe('Repository name'),
    source: z.object({
        branch: z.string().describe('Branch to use for GitHub Pages'),
        path: z.string().describe('Directory to use for GitHub Pages')
    })
});

// Function implementations
export async function enablePages(owner, repo, source) {
    const response = await githubRequest(`https://api.github.com/repos/${owner}/${repo}/pages`, {
        method: 'POST',
        body: { source }
    });
    return response;
}

export async function getPages(owner, repo) {
    const response = await githubRequest(`https://api.github.com/repos/${owner}/${repo}/pages`);
    return response;
}

export async function updatePages(owner, repo, source) {
    const response = await githubRequest(`https://api.github.com/repos/${owner}/${repo}/pages`, {
        method: 'PUT',
        body: { source }
    });
    return response;
}
